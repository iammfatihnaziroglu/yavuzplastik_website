export const StickNavStyle = () => {
  return (
    <style jsx>{`
      .nav {
        transition: all 0.1s linear;
        position: fixed;
        z-index: 2000;
        width: 100%;
      }
      .scrollNav {
        transition: all 0.5s ease-in;
        z-index: 2000;
        background-color: #211c24;
        width: 100%;
        border-bottom: 1px solid #dddddd;
      }
      .styl {
        padding-top: 80px;
      }
    `}</style>
  );
};
