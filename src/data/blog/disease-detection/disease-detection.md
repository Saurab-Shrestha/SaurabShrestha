---
title: "How I Built a Disease Detection Model with Less Than 500 Images"
date: "Mar 15, 2024"
tag: "AI / ML"
readTime: "6 min read"
excerpt: "Training a deep learning model for agriculture requires vast data, but smaller datasets are possible with transfer learning."
---
# How I Built a Disease Detection Model with Less Than 500 Images

In deep learning, data is king. But what do you do when the kingdom is small? This is the story of how I tackled tomato leaf pathology with a very limited local dataset.

## The Challenge

The biggest hurdle was **overfitting**. With only ~480 images across 10 classes, the model was memorizing the background noise instead of the leaf features. 

### Why data augmentation matters
In rural Nepal, crop diseases often go undiagnosed. I implemented an aggressive data augmentation pipeline using:
- **Elastic transforms**
- **Color jittering**
- **Symmetric wrapping**

These simulated different lighting conditions common in Nepali farms.

## The Solution

I learned the hard way that you cannot trust the simple defaults. Instead, I:
1. Chose **MobileNetV2** for its efficiency.
2. Utilized **transfer learning** by freezing the initial 100 layers.
3. Only trained the top classification head.

> "Data augmentation isn't just about quantity, it's about the quality of variance you introduce into your model's perspective."

## Key Implementation Details

### Model Pruning
I employed 'Quantization-Aware Training' to compress the model from **100MB+ to under 15MB**, allowing it to run inference directly on a smartphone via a Flask-based microservice.

```python
# Pseudo-code for quantization
import tensorflow as tf
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
tflite_model = converter.convert()
```

The final model was small enough to run inference on a basic CPU, making it accessible to farmers without high-end hardware.
