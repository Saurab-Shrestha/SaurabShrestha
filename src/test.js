// This script finds the latest email in a thread, then processes its details and attachments.

// --- Step 1: Find the Latest Email in the Thread ---

// Check if there are any email items to process.
if (!items || items.length === 0) {
    // No emails found, return an empty object or throw an error.
    return [{ json: { error: "No email items to process." } }];
  }
  
  // The Outlook node provides a `receivedDateTime` field for each message.
  // We will sort the array of messages based on this field to find the newest one.
  // We create a copy with .slice() to avoid modifying the original input data.
  const sortedEmails = items.slice().sort((a, b) => {
    // It's safer to access json data only if it exists
    const dateA_str = a.json ? a.json.receivedDateTime : '1970-01-01T00:00:00Z';
    const dateB_str = b.json ? b.json.receivedDateTime : '1970-01-01T00:00:00Z';
    
    // Convert the date strings to Date objects for comparison.
    const dateA = new Date(dateA_str);
    const dateB = new Date(dateB_str);
    
    // Sort in descending order (newest first).
    return dateB - dateA;
  });
  
  // The newest email is now the first item in the sorted array.
  const latestItem = sortedEmails[0];
  const email = latestItem.json || {};
  const binary = latestItem.binary || {};
  
  
  // --- Step 2: Process Attachments (Your Original Logic) ---
  
  // 2a. Parse attachments JSON if available
  let parsedAttachments = {};
  try {
    if (typeof email.attachments === 'string') {
      parsedAttachments = JSON.parse(email.attachments);
    } else if (Array.isArray(email.attachments)) {
      // Handle array of attachment objects
      parsedAttachments = {};
      email.attachments.forEach((att, i) => {
        // Create a key for the attachment, e.g., 'attachment_0'
        parsedAttachments[`attachment_${i}`] = att;
      });
    } else if (typeof email.attachments === 'object' && email.attachments !== null) {
      // If it's already a suitable object
      parsedAttachments = email.attachments;
    }
  } catch (err) {
    console.error('Error parsing attachments JSON:', err);
  }
  
  // 2b. Get all keys from parsed and binary data
  const parsedKeys = Object.keys(parsedAttachments);
  const binaryKeys = Object.keys(binary).filter(k => k.startsWith('attachment_'));
  
  // 2c. Merge all unique keys to create a master list
  const allKeys = Array.from(new Set([...parsedKeys, ...binaryKeys]));
  
  // 2d. Build the final attachment array with metadata
  const attachmentsArr = allKeys.map(key => {
    const attMeta = parsedAttachments[key] || {};
    const binMeta = binary[key] || {};
  
    // Estimate file size from binary data if not provided
    let fileSize = attMeta.fileSize || attMeta.size || null; // 'size' is a common property name
    if (!fileSize && binMeta.data) {
      try {
        const decoded = Buffer.from(binMeta.data, 'base64');
        fileSize = decoded.length;
      } catch (e) {
        console.error(`Error decoding binary data for key ${key}:`, e);
        fileSize = null;
      }
    }
  
    return {
      key,
      fileName: attMeta.fileName || binMeta.fileName || attMeta.name || key, // 'name' is also common
      mimeType: attMeta.mimeType || binMeta.mimeType || 'application/octet-stream',
      fileSize,
    };
  });
  
  // --- Step 3: Return the Final Structured Output ---
  
  return [{
    json: {
      emailID: email.id || null,
      conversationID: email.conversationId || null,
      subject: email.subject || null,
      senderEmail: email.sender?.emailAddress?.address || null,
      senderName: email.sender?.emailAddress?.name || null,
      body: email.body?.content || email.body || null,
      receivedDateTime: email.receivedDateTime || null, // Added for clarity
      hasAttachments: email.hasAttachments === true || email.hasAttachments === "true",
      attachments: attachmentsArr,
    },
    // Pass the binary data of the latest email through to the next node
    binary: binary 
  }];