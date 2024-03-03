import { memo } from "react";

function SingleUpdateStatus() {
  return (
    <>
      <div className="p_single_update">
        <div className="p_container_single">
          <p>LAST UPDATE: MARCH 21, 2021</p>
        </div>
      </div>
    </>
  );
}

export default memo(SingleUpdateStatus);
