##  “Props are Like Instructions Given to a Worker”

Imagine you run a **software factory**.

* You (Parent Component) are the **Manager**
* Workers (Child Components) do specific jobs
* Every worker is **skilled but generic**
* To do the job properly, they need **instructions**

👉 **Those instructions are called PROPS**

The worker **does not decide** what to do.
The manager **tells them what to do**.

## 🧠 Fundamental Rule of Props (Golden Rule)

> **Data flows DOWN the component tree**

* Parent ➡ Child ✅
* Child ➡ Parent ❌ (directly)

This is called **unidirectional data flow**.

## 1️⃣ Passing Data – “Manager Gives Information”

### Story

The manager says:

> “Display this message on the notice board.”

```jsx
function ParentComponent() {
  const message = "Hello from parent!";
  return <ChildComponent text={message} />;
}

function ChildComponent({ text }) {
  return <p>{text}</p>;
}
```

### Mentor Insight

* Parent **owns the data**
* Child **only displays it**
* Child **cannot modify it**

📌 Props are **read-only**.

## 2️⃣ Configuring Components – “Same Worker, Different Instructions”

Think of a **Button Worker**.

You don’t create:

* LoginButton
* SaveButton
* DeleteButton

You create **one Button** and change its behavior using props.

```jsx
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
```

Usage:

```jsx
<Button label="Save" onClick={saveData} />
<Button label="Delete" onClick={deleteData} />
```

### Mentor Insight

> Components should be **generic**, props make them **specific**.

## 3️⃣ Handling Events – “Child Reports Back to Manager”

Now an important concept.

* Child **cannot change parent state**
* But child can **inform** the parent

How?

👉 By calling a **function passed as a prop**

```jsx
function ParentComponent() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <Button onClick={handleClick} />;
}
```

```jsx
function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}
```

### Mentor Explanation

* Parent gives child a **walkie-talkie**
* Child presses the button
* Parent hears the message

📌 This is called **callback via props**

---

## 4️⃣ Reusability – “One Blueprint, Many Buildings”

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

```jsx
<Greeting name="Alice" />
<Greeting name="Bob" />
```

### Mentor Insight

> Props turn components into **templates**, not hard-coded blocks.

---

## 5️⃣ Default Props – “Fallback Instructions”

Sometimes the manager forgets to give instructions.

```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}
```

🧠 Mentor Tip:

> Always assume **someone will forget to pass props**.


## 6️⃣ Prop Types – “Quality Check at Factory Gate”

In real-world projects:

* Wrong data causes bugs
* Bugs reach production 😬

```jsx
Greeting.propTypes = {
  name: PropTypes.string
};
```

### Mentor Insight

> PropTypes act like **entry validation** in enterprise systems.

---

## 7️⃣ `children` – “Component as a Container”

Sometimes a component doesn’t care **what** content comes inside.

```jsx
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}
```

```jsx
<Wrapper>
  <h1>Hello</h1>
  <p>Welcome to React</p>
</Wrapper>
```

### Mentor Analogy

* Wrapper is a **box**
* `children` are **items inside**
* Box doesn’t know what items are inside



## 🧠 Props vs State (Quick Mentor Contrast)

| Concept    | Props          | State            |
| ---------- | -------------- | ---------------- |
| Owned by   | Parent         | Component itself |
| Mutability | Read-only      | Mutable          |
| Purpose    | Configuration  | Behavior & data  |
| Direction  | Parent ➡ Child | Internal         |


## 🧠 Final Mentor Summary

> Props are **how components talk**,
> but only in a **disciplined, controlled way**.

They help you:

* Separate **logic from presentation**
* Build **reusable components**
* Maintain **clean architecture**
* Think like a **system designer**, not a coder

## 🌱 Mentor Advice to Learners

Before writing a component, ask:

1. What data should it receive?
2. What actions should it report?
3. Can this be reused with different props?

