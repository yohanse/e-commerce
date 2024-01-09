import { styled } from "styled-components";
import { AiOutlineCamera } from "react-icons/ai";
import { BiJoystickAlt } from "react-icons/bi";
import { CiHeadphones } from "react-icons/ci";
import style from "./catagorie.module.css";
import { IconType } from "react-icons";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import { getCatagory } from "../store/features/catagory-slice";

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
  const dispatch = useAppDispatch();
  const catagoryState = useAppSelector((state) => state.catagory);
  const Icons: IconType[] = [AiOutlineCamera, BiJoystickAlt, CiHeadphones];

  useEffect(() => {
    dispatch(getCatagory())
  }, [])
  return (
    <Wrapper>
      {catagoryState.catagory.map((cat, index) => {
        const Icon = Icons[index % 3];
        return (
          <div key={cat.id} className={style["icon"]}>
            <Icon size={120} />
            <P>{cat.title}</P>
          </div>
        );
      })}
    </Wrapper>
  );
};
