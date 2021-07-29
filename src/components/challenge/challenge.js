import React from "react";
import HeaderTextBlock from "@carvana/showroom-content/TextBlock/Header";
import { THUMB_SIZE } from "@carvana/showroom-forms/Switch/Base/SwitchBase.styles";
import Input from "@carvana/showroom-forms/Input";
import * as sc from "./challenge.styles";
import CodeMirror from "react-codemirror";
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/theme/erlang-dark.css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';




const Challenge = () => {
    return (
        <sc.ContentWrapper>
            <sc.CodeArea>
                <style dangerouslySetInnerHTML={{__html: `
                    .CodeMirror {height:1000px !important}
                `}} />

                <CodeMirror
                    value={'var i = 1;'}
                    options={{
                        theme: 'erlang-dark',
                        keyMap: 'default',
                        fullscreen: true,
                        mode: 'javascript',
                        lineNumbers: true,
                    }}
                />
            </sc.CodeArea>

            

        </sc.ContentWrapper>
      );
  };
  
  export default Challenge;


