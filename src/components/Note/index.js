import React from "react";
// CSS
import './note.css'
function Note({ title, content }) {
  return (
  <li className="note">
    <p><strong>{title}</strong></p>
    <p>{content}</p>
  </li>
  )
}
export default Note