import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actions } from "./store";
import { Link } from "react-router-dom";
import styles from "./style.css";

const Home = props => {
  useEffect(() => {
    props.getList();
  });
  return (
    <div className={styles.container}>
      <Link to='/login'>home</Link>
      <Link to='/translate'>translate</Link>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.name
});

const mapDispatchToProps = dispatch => ({
  getList() {
    dispatch(actions.getNewsList());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
