import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <>
    <div>
        <button><Link to="order">Orders</Link></button>
        <button><Link to="profile">Profile</Link></button>
    </div>
      <h1>This is User Component</h1>
      
      <h1>This is Nested Routed Demo</h1>
      <Outlet />
    </>
  );
}

export function Orders() {
  return (
    <h1>This is  user Orders Component</h1>
  );
}

export function Profile() {
  return (
    <h1>This is Profile Component</h1>
  );
}
