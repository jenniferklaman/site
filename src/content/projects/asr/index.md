---
title: "Data-Constrained ASR Model"
description: "Automatic speech recognition for data-limited languages using data augmentation and multilingual models."
date: "2025-06-01"
repoURL: ""
demoURL: ""
draft: false
---

Developed **automatic speech recognition (ASR) models** for 20+ low-resource languages, experimenting with different architectures and data augmentation strategies to improve performance under limited training data.  

- Compared **Wav2Vec XLSR53** and **Wav2Vec-BERT** models for multilingual speech representation.  
- Applied **SpecAugment** to artificially expand training datasets and improve robustness.  
- Conducted systematic **data scaling experiments** with 0.25×, 0.5×, 0.75×, and full training splits to evaluate performance under data constraints.  
- Used **80/20 train-test splits** and decoded outputs with **KenLM language models** over defined intervals to assess accuracy.  
- Coordinated experiments across **20+ languages**, providing insights into cross-lingual performance and the impact of data augmentation in low-resource ASR scenarios.  
