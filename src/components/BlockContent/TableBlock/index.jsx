import { memo } from "react";

function TableBlock(props) {
  const { node } = props;
  const headerRow = node?.rows?.[0];
  const bodyRows = node?.rows?.slice(1) || [];

  return (
    <div className="overflow-auto">
      <table className="border-collapse text-sm leading-[130%]">
        <thead className="">
          {headerRow && headerRow._type === "tableRow" && (
            <tr className="border-x border-t border-[#0000001f] align-top leading-[160%]">
              {headerRow.cells.map((cel, i) => (
                <th
                  key={i + headerRow._key}
                  className="border border-t border-[#0000001f] px-2.5 py-2 text-left"
                >
                  {cel}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody className="">
          {bodyRows.map(
            (row, i) =>
              row._type === "tableRow" && (
                <tr
                  key={row?._key}
                  className="border-x border-b border-[#0000001f] align-top leading-[160%]"
                >
                  {row.cells.map((cel, i) => (
                    <td
                      key={i + row._key}
                      className="border border-b border-[#0000001f] fill-inherit px-2.5 py-2"
                    >
                      {cel}
                    </td>
                  ))}
                </tr>
              ),
          )}
        </tbody>
      </table>
    </div>
  );
}

export default memo(TableBlock);
