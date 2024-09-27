import React, { useRef } from "react";

function MainScrollToParticularSection() {
    const ref = useRef({});
    const scrollToView = (id) => {
      if (ref.current[id]) {
        ref.current[id].scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <>
      <div>
        <div 
        id="1"
        ref={(element) => (ref.current["1"] = element)}
        style={{
            height : "1500px",
            backgroundColor : "red"
        }}>
            <button onClick={()=> scrollToView("2")}>Scroll</button>
          <h1>Section 1</h1>
          <section>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            recusandae quam rem, laborum aliquid non asperiores ut id voluptas
            obcaecati, eaque nostrum nisi alias exercitationem facilis dolorem.
            Autem eveniet quidem deserunt a ex incidunt, possimus atque dolorum
            error, temporibus debitis. Alias voluptas odio, repellat nesciunt
            unde velit ipsum reprehenderit sequi, neque sint sunt nostrum
            incidunt voluptatibus, itaque excepturi eligendi? Optio alias totam
            corrupti debitis ut similique non. Itaque autem ex eligendi hic ea.
            Totam eaque itaque dolorum, praesentium commodi ullam labore natus
            debitis illum soluta rem repellat, error id atque minima tempora
            tempore, esse adipisci? Consectetur repudiandae ratione magnam
            eligendi?
          </section>
        </div>
        <div 
        id="2"
        ref={(element) => (ref.current["2"] = element)}
        style={{
            height : "1500px",
            backgroundColor : "green"
        }}>
            <button onClick={()=>scrollToView("3")}>Scroll</button>
          <h1>Section 2</h1>
          <section>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            recusandae quam rem, laborum aliquid non asperiores ut id voluptas
            obcaecati, eaque nostrum nisi alias exercitationem facilis dolorem.
            Autem eveniet quidem deserunt a ex incidunt, possimus atque dolorum
            error, temporibus debitis. Alias voluptas odio, repellat nesciunt
            unde velit ipsum reprehenderit sequi, neque sint sunt nostrum
            incidunt voluptatibus, itaque excepturi eligendi? Optio alias totam
            corrupti debitis ut similique non. Itaque autem ex eligendi hic ea.
            Totam eaque itaque dolorum, praesentium commodi ullam labore natus
            debitis illum soluta rem repellat, error id atque minima tempora
            tempore, esse adipisci? Consectetur repudiandae ratione magnam
            eligendi?
          </section>
        </div>
        <div 
        id="3" 
        ref={(element) => (ref.current["3"] = element)}
        style={{
            height : "1500px",
            backgroundColor : "blue"
        }}>
            <button onClick={()=>scrollToView("4")}>Scroll</button>
          <h1>Section 3</h1>
          <section>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            recusandae quam rem, laborum aliquid non asperiores ut id voluptas
            obcaecati, eaque nostrum nisi alias exercitationem facilis dolorem.
            Autem eveniet quidem deserunt a ex incidunt, possimus atque dolorum
            error, temporibus debitis. Alias voluptas odio, repellat nesciunt
            unde velit ipsum reprehenderit sequi, neque sint sunt nostrum
            incidunt voluptatibus, itaque excepturi eligendi? Optio alias totam
            corrupti debitis ut similique non. Itaque autem ex eligendi hic ea.
            Totam eaque itaque dolorum, praesentium commodi ullam labore natus
            debitis illum soluta rem repellat, error id atque minima tempora
            tempore, esse adipisci? Consectetur repudiandae ratione magnam
            eligendi?
          </section>
        </div>
        <div 
        id="4" 
        ref={(element) => (ref.current["4"] = element)}
        style={{
            height : "1500px",
            backgroundColor : "yellow"
        }}>
            <button onClick={()=>scrollToView("5")}>Scroll</button>
          <h1>Section 4</h1>
          <section>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            recusandae quam rem, laborum aliquid non asperiores ut id voluptas
            obcaecati, eaque nostrum nisi alias exercitationem facilis dolorem.
            Autem eveniet quidem deserunt a ex incidunt, possimus atque dolorum
            error, temporibus debitis. Alias voluptas odio, repellat nesciunt
            unde velit ipsum reprehenderit sequi, neque sint sunt nostrum
            incidunt voluptatibus, itaque excepturi eligendi? Optio alias totam
            corrupti debitis ut similique non. Itaque autem ex eligendi hic ea.
            Totam eaque itaque dolorum, praesentium commodi ullam labore natus
            debitis illum soluta rem repellat, error id atque minima tempora
            tempore, esse adipisci? Consectetur repudiandae ratione magnam
            eligendi?
          </section>
        </div>
        <div 
        id="5" 
        ref={(element) => (ref.current["5"] = element)}
        style={{
            height : "1500px",
            backgroundColor : "purple"
        }}>
            <button onClick={()=>scrollToView("1")}>Scroll Back To Top</button>
          <h1>Section 5</h1>
          <section>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            recusandae quam rem, laborum aliquid non asperiores ut id voluptas
            obcaecati, eaque nostrum nisi alias exercitationem facilis dolorem.
            Autem eveniet quidem deserunt a ex incidunt, possimus atque dolorum
            error, temporibus debitis. Alias voluptas odio, repellat nesciunt
            unde velit ipsum reprehenderit sequi, neque sint sunt nostrum
            incidunt voluptatibus, itaque excepturi eligendi? Optio alias totam
            corrupti debitis ut similique non. Itaque autem ex eligendi hic ea.
            Totam eaque itaque dolorum, praesentium commodi ullam labore natus
            debitis illum soluta rem repellat, error id atque minima tempora
            tempore, esse adipisci? Consectetur repudiandae ratione magnam
            eligendi?
          </section>
        </div>
      </div>
    </>
  );
}

export default MainScrollToParticularSection;
