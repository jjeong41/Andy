"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { QuizCircleContainer, IframeContainer, QuizTitle, WholeWrapper } from "../styles/Page.styled";


interface IQuizButton {
  quizName: string;
  quizImg: string;
  quizRoute: string;
}

export default function QuizButton(props: IQuizButton) {
  const { quizName, quizImg, quizRoute } = props;

  // eslint-disable-next-line no-console
  console.log(quizImg);
  const router = useRouter();
  const routetoQuiz = () => {
    if (quizRoute === "incorrect_list") {
      const route = "/incorrect_list";
      router.push(route);
    } else {
      const route = `/category?mode=${quizRoute}`;
      router.push(route);
    }
  };

  const handleContainerClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation(); // 이벤트 전파 방지
    routetoQuiz();
  };

  return (
    <WholeWrapper>
      <QuizCircleContainer onClick={handleContainerClick}>
        <IframeContainer>
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe src={quizImg} />
        </IframeContainer>
      </QuizCircleContainer>

      <QuizTitle>
        {quizName}
      </QuizTitle>
    </WholeWrapper>
  );
}
