/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Category,
  GameResultRequest,
  GameResultResponse,
  Problem,
  ProblemResultResponse,
  ReexamineRequest,
  ReexamineResponse,
  WrongProblemsReqeust,
  WrongProblemsResponse,
} from "../_models/gameA.interface";
import {
  getCategories,
  getGamebyCategory,
  getGameResult,
  getWrongProblems,
  reexamine,
  sendProblemResult,
} from "../api/game";

// GAME-001
export const useCategories = () => {
  const query = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return query;
};

// GAME-002
export const useGamebyCategory = (question_category_seq: number) => {
  const query = useQuery<any>({
    queryKey: ["game", { question_category_seq }],
    queryFn: () => getGamebyCategory({ question_category_seq }),
    select: (data) => {
      const newData: Problem[] = [];
      data.problems.map((problem: any) => {
        newData.push(problem.problem);
        return problem;
      });
      return newData;
    },
  });

  return query;
};

// GAME-003
// export const useSendResult = (
//   user: string,
//   data: ProblemResultRequest,
//   enabled: boolean,
// ) => {
//   const query = useQuery<ProblemResultResponse>({
//     queryKey: ["sendResult", { resultData: data, user }],
//     queryFn: () => sendProblemResult(data),
//     enabled,
//   });
//   return query;
// };

// GAME-003
export const useSendResultMutation = () => {
  const mutate = useMutation<ProblemResultResponse, Error, FormData, any>({
    mutationFn: (formData: FormData) => sendProblemResult(formData),
  });
  return mutate;
};

// GAME-004
export const useGameResultMutation = () => {
  const mutate = useMutation<GameResultResponse, Error, GameResultRequest, any>(
    {
      mutationFn: (request: GameResultRequest) => getGameResult(request),
    },
  );
  return mutate;
};

// GAME-005: Needs to be pagninated
export const useWrongProblems = (data: WrongProblemsReqeust) => {
  const query = useQuery<WrongProblemsResponse>({
    queryKey: ["wrongProblems", data],
    queryFn: () => getWrongProblems(data),
  });
  return query;
};

// GAME-006
export const useReexamine = (user: string, data: ReexamineRequest) => {
  const query = useQuery<ReexamineResponse>({
    queryKey: ["reexamine"],
    queryFn: () => reexamine(data),
  });
  return query;
};
