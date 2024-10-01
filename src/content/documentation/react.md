---
id: e2272306
layout: ../../layouts/MarkdownContainer.astro
title: React
description: This React Cheat Sheet is a comprehensive and concise reference guide for developers at all skill levels. It covers essential React topics with complete code examples, prioritizing clarity and readability. Each topic is explained using TypeScript for added type safety.
imageUrl: ../../assets/react.png
date: Sep 10, 2023
datetime: "2023-09-10"
category: Documentation
disable: false
---

### Functional Components

- A functional component in React is a JavaScript/ Typescript function that returns JSX/ TSX

```tsx
type GreetingProps = {
  name: string;
};

const Greeting: React.FC<GreetingProps> = ({ name }) => (
  <div>
    <h1>Hello, {name}!</h1>
  </div>
);

export default Greeting;
```

---

- To use the functional component, you can import it into another component and pass props as necessary

```tsx
import Greeting from "./Greeting";

function App() {
  return <Greeting name="Jane" />;
}
```

---

### Handling Events

- Event handlers are functions that get executed when a specific event occurs, such as a click or input change

```tsx
const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
```

---

- For events like form submissions, you can prevent the default behavior using `event.preventDefault()`

```tsx
const FormExample: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <h2>Form Example</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
```

---

### Custom Hook

- Creating a custom hook for fetching data with loading and error states is a common pattern in React

```tsx
const usePokemon = () => {
  const [data, setData] = useState<PokemonSchema>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getAllPokemon();
        setData(pokemonData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default usePokemon;
```

---

- To use this custom hook in React components to fetch and handle data

```tsx
function PokemonList() {
  const { data, loading, error } = usePokemon();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Pokemon List</h2>
      {data && (
        <ul>
          {data.results.map((pokemon) => (
            <li key={pokemon.url}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

---

### Image

- Displays a skeleton while loading, and a fallback image in case of an error

```tsx
import React, { useEffect, useState } from "react";

const ImageComponent = ({ src, alt, fallbackImage, ...rest }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsError(true);
    };
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (isLoading) {
    return (
      <div className="h-20 w-full animate-pulse bg-gray-500">
        {/* This div acts as a skeleton screen */}
      </div>
    );
  }

  if (isError) {
    return (
      <img
        src={fallbackImage}
        alt={alt}
        className="h-full w-full object-cover"
        {...rest}
      />
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className="h-full w-full object-cover"
      {...rest}
    />
  );
};

export default ImageComponent;
```

---

### Context API

- Manage global state in a type-safe manner

```tsx
import React, { createContext, useContext, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
```

---

### useReducer

- Particularly useful for complex state logic that involves multiple sub-values

```tsx
import { useReducer } from "react";

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  cartItems: CartItem[];
  totalAmount: number;
};

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "CLEAR_CART" };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedCartItems = state.cartItems.concat(action.payload);
      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.quantity,
      };
    }
    case "REMOVE_ITEM": {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      const removedItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      const updatedTotalAmount = removedItem
        ? state.totalAmount - removedItem.price * removedItem.quantity
        : state.totalAmount;
      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case "CLEAR_CART":
      return {
        cartItems: [],
        totalAmount: 0,
      };
    default:
      return state;
  }
};

const ShoppingCart: React.FC = () => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    totalAmount: 0,
  });

  const addItemToCart = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCart = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartState.cartItems.map((item) => (
        <div key={item.id}>
          <span>
            {item.title} - {item.quantity} x ${item.price}
          </span>
          <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div>Total Amount: ${cartState.totalAmount.toFixed(2)}</div>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};
```
