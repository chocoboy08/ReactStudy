import React, {useState} from "react";

const EventPractice = () => {
    const [message, setMessage] = useState({
        user : '',
        content : ''    
    });

    const {user, content} = message;

    const handleChange = (e) => {
        setMessage({...message, [e.target.name] : e.target.value});
    }

    const handleClick = () => {
        alert(user + ':' + content);
        setMessage({user:'', content:''});
    }

    return(
        <div>
            <h1>이벤트 연습</h1>
            <input
                className="inputUser"
                type="test"
                name="user"
                placeholder="사용자 이름"
                value={user}
                onChange={handleChange}/>
            <input
              className="inputMessage"
              type="test"
              name="content"
              placeholder="아무거나 입력해보세요"
              value={content}
              onChange={handleChange}/>   
              <button
              onClick={handleClick}>확인</button>
        </div>
    );
}

export default EventPractice;