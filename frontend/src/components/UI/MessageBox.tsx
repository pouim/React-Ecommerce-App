import React from 'react';

interface MessageBoxProps {
   variant?: string;
   children: React.ReactNode;
}

const MessageBox:React.FC<MessageBoxProps> = (props) => {
    return (
       <div  className={`alert alert-${props.variant || 'info'}`}>
          {props.children}
       </div>
    );
};

export default MessageBox;