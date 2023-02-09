// import { styled } from "../assets/styling/stitches/stitches.config";

// const StyledGradient = styled("div", {
//   "--stat-width": 1,
//   "--content-start": "col 1",
//   "--content-width": 4,
//   "--subgrid-width": 4,
//   display: "flex",
//   "margin-top": "calc(20vw*var(--canvas-aspect-ratio))",
//   background:
//     "linear-gradient(270.01deg,#f9a78c .01%,#ed8d82 7.3%,#d970c8 42.19%,#c866af 50.52%,#b75cc4 89.58%,#b359ca 99.99%,#693295 0)",
//   "-webkit-background-clip": "text",
//   "background-clip": "text",
//   "-webkit-text-fill-color": "transparent",
// });

// const Computer = () => {
//   return (
//     <div className="container mb-5 border p-5">
//       <div className="row justify-content-center mb-5">
//         <div className="col-7 text-center">
//           <span className="text-uppercase">Results</span>
//           <h6 className="fs-h1 my-3">Production that’s way more productive.</h6>
//         </div>
//       </div>

//       <StyledGradient className="row justify-content-center">
//         <div className="col-7 ">
//           <div className="d-flex justify-content-center">
//             <p className="col-3 text-center ">
//               <span className="display-6">31 h</span>
//               <p className="" style={{ fontSize: "0.8rem" }}>
//                 faster turnarounds
//               </p>
//             </p>

//             <p className="col-3 text-center">
//               <span className="display-6">27 h</span>
//               <p style={{ fontSize: "0.8rem" }}>fewer revisions </p>
//             </p>
//             <p className="col-3 text-center">
//               <span className="display-6">25 h</span>
//               <p style={{ fontSize: "0.8rem" }}>fewer reviews</p>
//             </p>
//           </div>
//         </div>
//       </StyledGradient>
//     </div>
//   );
// };
// export default Computer;

const Computer = () => {
  return (
    <div>
      <div className="container mb-5 border p-5">
        <div className="row justify-content-center mb-5">
          <div className="col-7 text-center">
            <span className="text-uppercase">Results</span>
            <h6 className="fs-h1 my-3">
              Production that’s way more productive.
            </h6>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-7 ">
            <div className="d-flex justify-content-center">
              <p className="col-3 text-center ">
                <span className="display-6">31 h</span>
                <p className="" style={{ fontSize: "0.8rem" }}>
                  faster turnarounds
                </p>
              </p>

              <p className="col-3 text-center">
                <span className="display-6">27 h</span>
                <p style={{ fontSize: "0.8rem" }}>fewer revisions </p>
              </p>
              <p className="col-3 text-center">
                <span className="display-6">25 h</span>
                <p style={{ fontSize: "0.8rem" }}>fewer reviews</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Computer;
