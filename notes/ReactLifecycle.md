## “Every React Component Is Like a Living Employee in an Organization”

At Transflower, when a **new employee joins**, there is a clear journey:

1. **Onboarding**
2. **Daily work & changes**
3. **Exit & cleanup**

A **React component lives the same life**.

👉 React Lifecycle is nothing but **how React manages the life of a component from birth to exit**.

## 🧬 The Three Life Phases (Big Picture)

| Human / Organization | React Component |
| -------------------- | --------------- |
| Joining the company  | **Mounting**    |
| Working & growing    | **Updating**    |
| Leaving the company  | **Unmounting**  |

Once you understand this, lifecycle methods become **logical checkpoints**, not magic functions.

# 1️⃣ Mounting Phase

## “Component Joins the System”

This is when:

* Component is **created**
* Added to the **DOM**
* Ready to start working

### 🧠 Mentor Mapping

> This is like a new employee getting:
>
> * ID card
> * Laptop
> * First assignment

### Important Lifecycle Moments (Class Component)

#### 🔹 `constructor`

* Setup phase
* Initialize state
* Bind methods

```js
constructor(props) {
  super(props);
  this.state = { count: 0 };
}
```

🧠 Mentor Rule:

> Constructor is for **preparation**, not side effects.


#### 🔹 `componentDidMount`

* Component is now visible in UI
* Safe place for:

  * API calls
  * Subscriptions
  * Timers

```js
componentDidMount() {
  fetchData();
}
```

🧠 Mentor Insight:

> “Only after joining can the employee start real work.”

### 🔄 Functional Component Equivalent

```js
useEffect(() => {
  fetchData();
}, []);
```

* Empty dependency array `[]`
* Runs **once after first render**

---

# 2️⃣ Updating Phase

## “Component Is Doing Its Job & Changing”

This phase happens when:

* **Props change** (new instructions from manager)
* **State changes** (internal decision or event)

### 🧠 Mentor Story

An employee:

* Gets new requirements
* Learns new skills
* Changes behavior

React says:

> “Let me re-render and reflect these changes.”


### Key Updating Methods (Class Components)

#### 🔹 `shouldComponentUpdate`

* Performance gatekeeper
* Decide whether to re-render or not

```js
shouldComponentUpdate(nextProps, nextState) {
  return true;
}
```

🧠 Mentor Insight:

> Don’t call the employee for a meeting if nothing changed.

#### 🔹 `componentDidUpdate`

* Runs **after update**
* Ideal for:

  * Syncing data
  * Reacting to prop/state changes

```js
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    console.log("Count changed");
  }
}
```


### 🔄 Functional Component Equivalent

```js
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

🧠 Mentor Rule:

> Dependencies decide **when React should listen again**.

# 3️⃣ Unmounting Phase

## “Component Leaves the System”

This happens when:

* Route changes
* Conditional rendering removes component
* App structure changes


### 🧠 Mentor Story

When an employee leaves:

* Laptop returned
* Access revoked
* Subscriptions cancelled

### 🔹 `componentWillUnmount`

```js
componentWillUnmount() {
  clearInterval(this.timer);
}
```

Used for:

* Cleanup
* Removing listeners
* Canceling requests

### 🔄 Functional Component Equivalent

```js
useEffect(() => {
  return () => {
    clearInterval(timer);
  };
}, []);
```

🧠 Mentor Insight:

> Cleanup is as important as setup in enterprise systems.

# 🧠 Lifecycle with Hooks – Transflower Simplification

Instead of **many lifecycle methods**, React gives us:

> 🎯 **One powerful hook: `useEffect`**

| Lifecycle Phase      | useEffect Pattern             |
| -------------------- | ----------------------------- |
| componentDidMount    | `useEffect(() => {}, [])`     |
| componentDidUpdate   | `useEffect(() => {}, [deps])` |
| componentWillUnmount | `return () => {}`             |

Mentor view:

> Hooks reduce **ceremony**, not **responsibility**.


# ⚠️ Why Lifecycle / useEffect Runs Twice?

This confuses many learners, so let’s demystify it.


## 🧪 Reason 1: React Strict Mode (Development Only)

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

React intentionally:

* Mounts
* Unmounts
* Mounts again

Why?

🧠 Mentor Explanation:

> React is **testing your discipline**.
> “Can your code handle setup & cleanup correctly?”

📌 This happens **only in development**, never in production.

## ⚙️ Reason 2: React 18 Concurrent Rendering

React may:

* Pause
* Resume
* Restart rendering

Mentor analogy:

> Like autosave drafts while writing a document.

## 🔁 Reason 3: State or Props Changing

Every meaningful change ➜ re-render ➜ lifecycle runs.

This is **expected**, not a bug.


## 🧠 Mentor’s Golden Rules for Lifecycle

1. ❌ Don’t put side effects in render
2. ✅ Fetch data in `componentDidMount` / `useEffect`
3. ✅ Always clean up subscriptions
4. ❌ Don’t fear double calls in dev mode
5. ✅ Think in **phases**, not functions

# 🌱 Final Transflower Mentor Summary

> **Lifecycle is React’s discipline system.**

It ensures:

* Predictable behavior
* Clean resource management
* High-performance UI
* Enterprise-grade stability

If you understand lifecycle well:

* Debugging becomes easy
* Memory leaks disappear
* Architecture thinking improves

---

## 🚀 What We Can Do Next (Mentor Path)

We can now:

* Map Lifecycle to **API calls**
* Connect Lifecycle with **Routing**
* Design **Dashboard data flow**
* Explain `useEffect` pitfalls
* Show lifecycle in **real production bugs**

Just tell me the next step, and we’ll walk it **Transflower mentor-style** 🌼
