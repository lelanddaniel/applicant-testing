import React from "react";
import * as sc from "./challenge.styles";
import { SectionHeader, SubSectionHeader } from '../../assets/styles';
import challenges from "../../modules/challenges/challenges";

//CodeMirror imports...
import CodeMirror from "react-codemirror";
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/theme/erlang-dark.css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';


var thisChallenge = challenges.challengelist[0];


const Challenge = () => {
    return (
        <sc.Wrapper>
            <sc.ChallengeInfo>
            <div>
            <SectionHeader>Challenge: {thisChallenge.title}</SectionHeader>
            <b>Lanuage: </b>  {thisChallenge.language} <br />
            <b>Difficulty: </b>  {challenges.getLevelName(thisChallenge.level)} 
            </div>
            <div>
                <sc.SimpleButton>Submit Your Work</sc.SimpleButton>
            </div>
            </sc.ChallengeInfo>
            <sc.CodeArea>
                <style dangerouslySetInnerHTML={{__html: `
                    .CodeMirror {height:1000px !important}
                `}} />

                <CodeMirror
                    value={thisChallenge.code}
                    options={{
                        theme: 'erlang-dark',
                        keyMap: 'default',
                        fullscreen: true,
                        mode: thisChallenge.language,
                        lineNumbers: true,
                    }}
                />
            </sc.CodeArea>

            

        </sc.Wrapper>
      );
  };
  
  export default Challenge;


