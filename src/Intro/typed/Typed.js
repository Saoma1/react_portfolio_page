import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function TypedText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hello^500 my name is Soto <br>^500 I am a <span style="color: #c41b6d; font-weight: bold"> Web Developer</span>'],
      startDelay: 500,
      typeSpeed: 60,
      backSpeed: 60,
      showCursor: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typed flex">
      <h1 className="">
        <span ref={el}></span>
      </h1>
    </div>
  );
}
