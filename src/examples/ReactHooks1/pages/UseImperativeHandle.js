import React, { useRef, forwardRef, useImperativeHandle } from "react";

const Phone = () => {
  const phoneEl = useRef(null);

  const handlePhone = () => {
    phoneEl.current.verify();
    phoneEl.current.validate();
  };

  return <TextInput ref={phoneEl} onChange={handlePhone} />;
};

const TextInput = forwardRef((props, ref) => {
  const verify = () => {
    console.log("verify() function called");
  };

  const validate = () => {
    console.log("validate() function called");
  };

  useImperativeHandle(ref, () => ({ verify, validate }), []);

  return <input {...props} type="text" />;
});

function UseImperativeHandle() {
  return (
    <div>
      <h1>useImperativeHandle</h1>
      <Phone />
    </div>
  );
}

export default UseImperativeHandle;
