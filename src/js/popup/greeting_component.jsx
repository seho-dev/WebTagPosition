import React from "react";
import { hot } from "react-hot-loader";

class GreetingComponent extends React.Component {
    render() {
        return (
            <div className="popBox">
                <p className="indexTitle">WebTagPosition-您的网页书签plus</p>
                {/* 书签列表 */}
                <div className="indexTagTitle">
                    <i className="iconfont icon-like"></i><p className="tagListTitle">已收藏标签</p>
                </div>
                <ul className="tagList">
                    <li className="tagItem">
                        <i className="iconfont icon-wenjianjia"></i>
                        <span className="label">Vue</span>
                    </li>
                    <li className="tagItem">
                        <i className="iconfont icon-wenjianjia"></i>
                        <span className="label">React学习</span>
                    </li>
                    <li className="tagItem">
                        <i className="iconfont icon-wenjianjia"></i>
                        <span className="label">Angular学习</span>
                    </li>
                    <li className="tagItem">
                        <i className="iconfont icon-icon-test"></i>
                        <span className="label">震惊！周瀚森居然又有新老婆了</span>
                    </li>
                    <li className="tagItem">
                        <i className="iconfont icon-icon-test"></i>
                        <span className="label">震惊！谢敏居然不知道日报咋写</span>
                    </li>
                </ul>
            </div>
        )
    }
};

export default hot(module)(GreetingComponent)