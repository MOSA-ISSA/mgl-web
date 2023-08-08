import { Form, useLocation } from "react-router-dom";
import ShowImage from "../component/ShowImage";

export default function Contact() {
    const {state} = useLocation();
    // console.log(state);

  const contact = {
    name:state.name,
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: false,
  };

  const Title = () => {
    return (
        <h1>
          {contact.name ? (
            <>
              {contact.name}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>
    );
  }
  
  const Links = ()=>(
    contact.twitter && (
        <p>
          <a
            target="_blank"
            href={`https://twitter.com/${contact.twitter}`}
          >
            {contact.twitter}
          </a>
        </p>
      )
  )

  const Edit =()=>{
    return(
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
    )
  }

  return (
    <div id="contact">
      <ShowImage sorce={contact.avatar}/>
      <div>
        <Title/>
        <Links/>
        <Edit/>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}