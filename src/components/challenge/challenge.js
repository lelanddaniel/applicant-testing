import React from "react";
import HeaderTextBlock from "@carvana/showroom-content/TextBlock/Header";
import { THUMB_SIZE } from "@carvana/showroom-forms/Switch/Base/SwitchBase.styles";
import Input from "@carvana/showroom-forms/Input";
import * as sc from "./challenge.styles";
import CodeMirror from "react-codemirror";
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/theme/monokai.css';



const Challenge = () => {
    return (
        <sc.ContentWrapper>
            <sc.CodeArea>
                <CodeMirror
                    value={"<script></script>"}
                    options={{
                        theme: 'monokai',
                        fullscreen: true,
                        mode: 'jsx',
                    }}
                />
            </sc.CodeArea>

            

        </sc.ContentWrapper>
      );
  };
  
  export default Challenge;


