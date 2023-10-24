import React from "react";
import Header from "./header";

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <Header links={["Home", "About", "Gallery", "Contact", "Login"]} />
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          neque sequi tempora deserunt, facilis nobis rerum nulla molestias,
          velit cum adipisci error magni iusto alias, ipsa laudantium
          consequuntur reiciendis aliquid omnis quaerat porro! Tenetur
          doloremque quaerat quos! Quia, accusantium eum at iusto nesciunt rerum
          magnam obcaecati aut, dolorum aliquam soluta delectus, neque
          temporibus error nam odit excepturi omnis dolorem itaque perferendis?
          Assumenda dolores ratione laboriosam nobis sit sequi officia explicabo
          error cum debitis beatae est laborum nesciunt illum consequatur
          laudantium, possimus tenetur illo perferendis necessitatibus
          voluptatibus. Eius ratione, soluta ipsum repellat totam aut alias
          dignissimos odit reiciendis, nam vero deserunt.
        </main>
        <hr />
        <footer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          expedita placeat aperiam, quibusdam cupiditate nisi labore fugit
          veritatis dolore est magnam libero, voluptatem corrupti aspernatur
          sint saepe dolorem eaque. Laudantium, deserunt provident, quisquam hic
          unde dolorum ullam eligendi laborum iusto dolorem exercitationem
          maiores consequuntur maxime obcaecati cupiditate sunt culpa possimus.
        </footer>
      </div>
    );
  }
}

export default Wrapper;
