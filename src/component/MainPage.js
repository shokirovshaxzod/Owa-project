import React from 'react';
import Navbar from './Navbar';
import data from './data';
const MainPage = () => {
  console.log(data);
  const [dataItem] = React.useState(data);

  return (
    <main className="index">
      <Navbar />
      <div className="container">
        <div className="index-left">
          <article className="finder">
            <div className="menu-search">
              <input
                id="finder-input"
                type="search"
                autoComplete="off"
                placeholder="Search 113 HTML elements"
              />
              <i className="icon is-search"></i>
            </div>
            <div id="finder-checkboxes" className="finder-checkboxes">
              <label className="light light--experimental is-active">
                <input type="checkbox" name="experimental" />
                experimental
              </label>
              <label className="light light--meta is-active">
                <input type="checkbox" name="meta" />
                meta
              </label>
              <label className="light light--selfclosing is-active">
                <input type="checkbox" name="selfclosing" />
                self-closing
              </label>
              <label className="light light--inline is-active">
                <input type="checkbox" name="inline" />
                inline
              </label>
              <label className="light light--block is-active">
                <input type="checkbox" name="block" />
                block
              </label>
            </div>
            <div id="finder-list" className="finder-list">
              <div id="finder-list" className="finder-list">
                {dataItem.map((item) => {
                  const { id, className, itemTag, href, extraClass } = item;
                  const { classExtra, titleName } = extraClass;
                  return (
                    <article key={id} className={className}>
                      <a className="finder-item-link" href={href}>
                        <span className="item-name">{itemTag}</span>
                        <span className={classExtra}>{titleName}</span>
                      </a>
                      <div className="finder-item-meta">
                        <span className="light light--meta">meta </span>
                        <span className="light light--selfclosing">self-closing </span>
                        <span className="light light--inline">inline </span>
                        <span className="light light--block">block</span>
                      </div>
                    </article>
                  );
                })}
                {/*
           
                <article
                  className="finder-item finder-item--experimental finder-item--inline"
                  data-element-name="wbr"
                  data-experimental="true"
                  data-meta="false"
                  data-selfclosing="false"
                  data-inline="true"
                  data-block="false">
                  <a className="finder-item-link" href="https://htmlreference.io/element/wbr">
                    <span className="item-name">wbr</span>
                    <span className="light light--experimental">experimental</span>
                  </a>
                  <div className="finder-item-meta">
                    <span className="light light--meta">meta </span>
                    <span className="light light--selfclosing">self-closing </span>
                    <span className="light light--inline">inline </span>
                    <span className="light light--block">block</span>
                  </div>
                </article> */}
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
