import React from 'react'

const MyWork = () => (
  <div className="py-10">
    <h3 className="title font-black text-4xl text-center">MY WORK</h3>
    <div className="flex flex-wrap m-auto w-full md:w-11/12 lg:w-11/12">
      <div className="w-full md:w-4/12 lg:w-4/12 portfolio-wrap flex justify-center py-2">
        <a href="https://www.producthunt.com/posts/askmakers" target="_blank">
          <img src="/img/works/askmakers.gif" width="320" />
          <span className="text-3xl portfolio-title">AskMakers</span>
        </a>
      </div>
      <div className="w-full md:w-4/12 lg:w-4/12 portfolio-wrap flex justify-center py-2">
        <a href="https://www.producthunt.com/posts/pinweb" target="_blank">
          <img src="/img/works/pinweb.png" width="320" />
          <span className="text-3xl portfolio-title">PinWeb</span>
        </a>
      </div>
      <div className="w-full md:w-4/12 lg:w-4/12 portfolio-wrap flex justify-center py-2">
        <a href="https://wordpress.org/plugins/wp-facebook-like-ranking/" target="_blank">
          <img src="/img/works/wflr.png" width="320" />
          <span className="text-3xl portfolio-title">WordPress Facebook Like Ranking</span>
        </a>
      </div>
      <div className="w-full md:w-4/12 lg:w-4/12 portfolio-wrap flex justify-center py-2">
        <a href="https://nomadplacemap.com/?ref=taishikato" target="_blank">
          <img src="/img/works/nomadplacemap.png" width="320" />
          <span className="text-3xl portfolio-title">NomadPlaceMap</span>
        </a>
      </div>
    </div>
    <style jsx>{`
      .portfolio-wrap a {
        position: relative;
        display: inline-block;
        border: 2px solid #fff;
        color: black;
        text-align: center;
        text-decoration: none;
        outline: none;
        transition: all 0.3s;
        height: 250px;
        overflow: hidden;
      }
      .portfolio-wrap a::before,
      .portfolio-wrap a::after {
        position: absolute;
        top: -2px;
        right: -2px;
        bottom: -2px;
        left: -2px;
        z-index: 2;
        content: '';
        transition: all 0.3s;
      }
      .portfolio-wrap a::before {
        border-top: 10px solid #3be5ae;
        border-bottom: 10px solid #3be5ae;
        transform: scale(0, 1);
      }
      .portfolio-wrap a::after {
        border-right: 10px solid #3be5ae;
        border-left: 10px solid #3be5ae;
        transform: scale(1, 0);
      }
      .portfolio-wrap a:hover {
        color: #3be5ae;
      }
      .portfolio-wrap a:hover::after,
      .portfolio-wrap a:hover::before {
        transform: scale(1);
      }
      .portfolio-wrap a:hover img {
        opacity: 0.2;
        filter: alpha(opacity=20);
        -ms-filter: 'alpha(opacity=20)';
        -webkit-transition: 0.3s ease-in-out;
        -moz-transition: 0.3s ease-in-out;
        -o-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;
      }
      .portfolio-title {
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        display: none;
        color: #47cea2;
      }
      .portfolio-wrap a:hover .portfolio-title {
        display: inline;
      }
    `}</style>
  </div>
)

export default MyWork
