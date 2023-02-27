import React, { Component } from 'react';
import "./Main.css"
import Hoc from './Hoc';
class RandomOne extends Component {

    render() {
        return (
            <>
                <h1>Component 1</h1>
                <div>
                    <p className='about'>Lorem ipsum dolor sit amet. Non voluptas sint sit autem unde aut voluptate blanditiis est consequatur molestiae aut dolor molestiae eum nostrum laborum hic tempora nulla. In quos voluptatem rem rerum ducimus non quis exercitationem ab velit repellendus ab dolores autem et earum adipisci non blanditiis numquam! Ut voluptatem iure in quae architecto aut inventore animi et voluptatem repellat aut mollitia Quis. Et voluptatem fuga eos esse rerum aut odio quisquam sit repudiandae dolorum 33 pariatur rerum et pariatur nulla aut illum quasi.
                        Sit animi aliquam est Quis quasi eum voluptas cumque nam quae similique ut aliquam quae sit illo nesciunt. Qui ducimus distinctio At cumque odio ad quidem culpa sit sint consequatur. Et excepturi sequi est porro esse et molestias atque ab neque nobis qui perferendis aliquam! Et internos architecto ea odit culpa est provident voluptatibus sit iste quae qui voluptatibus rerum id quisquam odio et voluptas earum?</p>
                </div>
            </>
        );
    }
}

export default Hoc(RandomOne);
