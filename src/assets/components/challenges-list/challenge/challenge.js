import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as sc from "./challenge.styles";
import { Option } from "@carvana/showroom-forms/Select";

const Challenge = ({ rank, description, showDivider }) => {
  const history = useHistory();
  const [languageValue, setLanguageValue] = useState("");
  const [challengeValue, setChallengeValue] = useState("");

  const handleLanguageChange = (event) => {
    setLanguageValue(event.target.value);
  };

  const handleChallengeChange = (event) => {
    setChallengeValue(event.target.value);
  };

  const routeChange = () => {
    let path = './challenge/:id';
    history.push(path);
  }

  const challengeRanks = {
    noobChallenges: [
      "Simple Variable Level 1",
      "Math Operations Level 1",
      "Loop Level 1",
      "Function Level 1",
    ],

    hackerChallenges: [
      "Script Kiddie",
      "Becoming Dangerous",
      "Imposter Syndrome",
      "Final Destination",
    ],

    ninjaChallenges: [
      "Jackie Chan AI ChatBot",
      "New Season of The Last Airbender",
      "3D Food Printer",
      "Hackathon Voting Bot",
    ],

    guruChallenges: [
      "Invent Time Travel",
      "Hack Time",
      "Invert the Multiplexer",
      "Create SkyNet",
    ],
  };

  const createSelectOptions = () => {
    if (rank === "Noob") {
      const ranks = challengeRanks.noobChallenges;
      const options = [];
      for (let i = 0; i < ranks.length; i++) {
        options.push(
          <Option key={ranks[i]} value={ranks[i]}>
            {ranks[i]}
          </Option>
        );
      }
      return options;
    }
    if (rank === "Hacker") {
      const ranks = challengeRanks.hackerChallenges;
      const options = [];
      for (let i = 0; i < ranks.length; i++) {
        options.push(
          <Option key={ranks[i]} value={ranks[i]}>
            {ranks[i]}
          </Option>
        );
      }
      return options;
    }
    if (rank === "Ninja") {
      const ranks = challengeRanks.ninjaChallenges;
      const options = [];
      for (let i = 0; i < ranks.length; i++) {
        options.push(
          <Option key={ranks[i]} value={ranks[i]}>
            {ranks[i]}
          </Option>
        );
      }
      return options;
    }
    if (rank === "Guru") {
      const ranks = challengeRanks.guruChallenges;
      const options = [];
      for (let i = 0; i < ranks.length; i++) {
        options.push(
          <Option key={ranks[i]} value={ranks[i]}>
            {ranks[i]}
          </Option>
        );
      }
      return options;
    }
  };

  return (
    <div>
      <sc.Wrapper>
        <div>
          <sc.SectionHeader>{rank}</sc.SectionHeader>
          <sc.SubSectionHeader>{description}</sc.SubSectionHeader>
        </div>
        <div>
          <sc.DropDown
            id="ChallengeLanguages"
            value={languageValue}
            onChange={handleLanguageChange}
            label="Challenge Language"
          >
            <Option value="Python">Python</Option>
            <Option value="JavaScript">JavaScript</Option>
            <Option value="Java">Java</Option>
            <Option value="C#">C#</Option>
            <Option value="Go">Go</Option>
          </sc.DropDown>
          <sc.DropDown
            id="Challenges"
            value={challengeValue}
            onChange={handleChallengeChange}
            label="Coding Challenges"
          >
            {createSelectOptions()}
          </sc.DropDown>

          <sc.ButtonContainer>
            <sc.StyledButton
              onClick={() => routeChange()}
              >
                Start Challenge
            </sc.StyledButton>
          </sc.ButtonContainer>
        </div>
      </sc.Wrapper>
      {showDivider && <sc.HorizontalDivider />}
    </div>
  );
};
export default Challenge;
