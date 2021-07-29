import React from "react";
import * as sc from "./challenges-list.styles";
import Challenge from "./challenge";

const ChallengeList = ({ challenges }) => {
  return (
    <sc.ChallengesListSection>
      {challenges.map((challenge, index) => {
        return (
          <Challenge
            rank={challenge.rank}
            description={challenge.description}
            showDivider={index !== challenges.length - 1}
            key={challenge.id}
          />
        );
      })}
    </sc.ChallengesListSection>
  );
};

export default ChallengeList;
