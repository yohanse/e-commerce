import { styled } from "styled-components";
import { AiOutlineCamera } from "react-icons/ai";
import { BiJoystickAlt } from "react-icons/bi";
import { CiHeadphones } from "react-icons/ci";
import style from "./catagorie.module.css";
import { IconType } from "react-icons";

const Wrapper = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1em;
  overflow: scroll;
`;

const P = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const CatagorieMaterial = () => {
  const Icons: [IconType, String][] = [
    [AiOutlineCamera, "Camera"],
    [BiJoystickAlt, "Gaming"],
    [CiHeadphones, "HeadPhones"],
  ];
  return (
    <Wrapper>
      {Icons.map((icon, index) => {
        const [Icon, name] = icon;
        return (
          <div key={index} className={style["icon"]}>
            <Icon size={120} />
            <P>{name}</P>
          </div>
        );
      })}
      {Icons.map((icon, index) => {
        const [Icon, name] = icon;
        return (
          <div key={index} className={style["icon"]}>
            <Icon size={120} />
            <P>{name}</P>
          </div>
        );
      })}
      {Icons.map((icon, index) => {
        const [Icon, name] = icon;
        return (
          <div key={index} className={style["icon"]}>
            <Icon size={120} />
            <P>{name}</P>
          </div>
        );
      })}
      {Icons.map((icon, index) => {
        const [Icon, name] = icon;
        return (
          <div key={index} className={style["icon"]}>
            <Icon size={120} />
            <P>{name}</P>
          </div>
        );
      })}
    </Wrapper>
  );
};
