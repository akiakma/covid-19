import React from "react";
import { MdBrightness6 } from "react-icons/md";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { useDispatch } from "react-redux";
import { toggle } from "../../modules/mode";

const Navbutton = React.memo(() => {
  const dispatch = useDispatch();
  const onMode = () => dispatch(toggle());
  const onClick = () => {
    onMode();
  };

  return (
    <>
      <MdBrightness6 />
      <BootstrapSwitchButton checked={true} onstyle="dark" onChange={onClick} />
    </>
  );
});

export default Navbutton;
