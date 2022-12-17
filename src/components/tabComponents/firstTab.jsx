import React from "react";
import { Column, Table, WindowScroller } from "react-virtualized";
import { columns, rows } from "./table.constants";
import { any, string } from "prop-types";
import useStyles from "../../AppWithAuth/navigationDrawerStyled";

const FirstTab = () => {
  const classes = useStyles();

  const cellRenderer = ({ cellData }) => {
    return <div style={{ textAlign: "center", marginTop: 10 }}>{cellData}</div>;
  };

  cellRenderer.propTypes = {
    cellData: any.isRequired,
  };

  const headerRenderer = ({ label, dataKey }) => {
    return (
      <div
        id={dataKey}
        key={dataKey}
        style={{ textAlign: "center", marginTop: 10 }}
      >
        {label}
      </div>
    );
  };

  headerRenderer.propTypes = {
    dataKey: string.isRequired,
    label: string.isRequired,
  };
  return (
    <WindowScroller>
      {({ height, isScrolling, onChildScroll, scrollTop }) => (
        <div>
          <Table
            autoHeight
            className={classes.table}
            headerHeight={52}
            height={height}
            isScrolling={isScrolling}
            // noRowsRenderer={emptySearchResult}
            onScroll={onChildScroll}
            rowCount={rows.length}
            rowGetter={({ index }) => rows[index]}
            rowHeight={52}
            scrollTop={scrollTop}
            tabIndex={-1}
            width={2000}
          >
            {columns.map(({ dataKey, label, width }) => {
              return (
                <Column
                  cellRenderer={cellRenderer}
                  dataKey={dataKey}
                  headerRenderer={headerRenderer}
                  label={label}
                  width={width}
                />
              );
            })}
          </Table>
        </div>
      )}
    </WindowScroller>
  );
};

export default FirstTab;
