# Web Audio API

## 🎯 Objective

The Web Audio API allows you to generate, process, and analyze audio directly from JavaScript in the browser. It is a fundamental technology for building music applications, synthesizers, audio visualizers, games, and interactive experiences.

---

# What is the Web Audio API?

The Web Audio API is a programming interface that provides a node-based audio processing system.

Each node performs a specific task, such as:

* Generating sound.
* Controlling volume.
* Applying effects.
* Analyzing frequencies.
* Connecting audio inputs and outputs.

Nodes can be connected together to create an audio processing chain.

---

# AudioContext

Everything starts with an `AudioContext`.

```javascript
const audioCtx = new AudioContext();
```

The `AudioContext` acts as the environment where all audio nodes live.

Main responsibilities:

* Creating audio nodes.
* Managing playback.
* Controlling audio timing.
* Connecting sources and destinations.

---

# OscillatorNode

An oscillator generates a sound wave.

```javascript
const osc = audioCtx.createOscillator();
osc.connect(audioCtx.destination);
osc.start();
```

By default, it generates a sine wave.

---

## Wave Types

### Sine

A smooth and pure sound.

```javascript
osc.type = "sine";
```

### Square

An electronic sound with strong harmonics.

```javascript
osc.type = "square";
```

### Sawtooth

A bright and aggressive sound.

```javascript
osc.type = "sawtooth";
```

### Triangle

Softer than a square wave.

```javascript
osc.type = "triangle";
```

---

# Frequency

Frequency determines the pitch of a note.

```javascript
osc.frequency.value = 440;
```

440 Hz corresponds to:

**A4 (A note)**

Examples:

| Note | Frequency |
| ---- | --------- |
| C4   | 261.63 Hz |
| D4   | 293.66 Hz |
| E4   | 329.63 Hz |
| F4   | 349.23 Hz |
| G4   | 392.00 Hz |
| A4   | 440.00 Hz |
| B4   | 493.88 Hz |

---

# GainNode

Controls the volume.

```javascript
const gain = audioCtx.createGain();

osc.connect(gain);
gain.connect(audioCtx.destination);

gain.gain.value = 0.5;
```

Common values:

| Value | Result        |
| ----- | ------------- |
| 0     | Silent        |
| 0.5   | 50% volume    |
| 1     | Normal volume |

---

# Destination

Represents the final audio output device.

```javascript
audioCtx.destination
```

Typically this means:

* Speakers
* Headphones
* Bluetooth audio devices

---

# Basic Audio Flow

```text
Oscillator
     ↓
Gain
     ↓
Destination
```

Example:

```javascript
const audioCtx = new AudioContext();

const osc = audioCtx.createOscillator();
const gain = audioCtx.createGain();

osc.frequency.value = 261.63;
gain.gain.value = 0.3;

osc.connect(gain);
gain.connect(audioCtx.destination);

osc.start();
osc.stop(audioCtx.currentTime + 1);
```

This code plays a C4 note for one second.

---

# AnalyserNode

Allows you to retrieve audio information in real time.

```js
const analyser = audioCtx.createAnalyser();
```

Common use cases:

* Spectrum visualizers.
* Frequency bars.
* Audio-reactive experiences.
* Volume detection.

---

# Use Cases

The Web Audio API is commonly used for:

* Virtual pianos.
* Music sequencers.
* Synthesizers.
* Video games.
* Audio visualizers.
* Music education tools.
* Online DAWs.
* Interactive immersive experiences.

---

# Key Concepts

| Concept        | Purpose                |
| -------------- | ---------------------- |
| AudioContext   | Main audio environment |
| OscillatorNode | Generates sound        |
| GainNode       | Controls volume        |
| AnalyserNode   | Analyzes audio         |
| Frequency      | Defines the note       |
| Destination    | Audio output           |

---

# Summary

The Web Audio API enables developers to build advanced audio applications directly in the browser using a system of interconnected nodes. The fundamental components are:

* AudioContext
* OscillatorNode
* GainNode
* AnalyserNode
* Destination

With these building blocks, you can create anything from a simple note generator to synthesizers, sequencers, audio visualizers, and complex interactive musical experiences.
