"use strict";

import React from "react";

export default class extends React.Component {
    constructor(props) {
        super();
        this.state = {
            data: []
        };
        this.getTableRow = this.getTableRow.bind(this);
        this.editRow = this.editRow.bind(this);
    }

    getTableRow(rowData, i) {
        let data = [];
        for (let key in rowData) {
            if (rowData.hasOwnProperty(key) && key !== "id") {
                data.push(<td key={key}>{rowData[key]}</td>);
            }
        }
        data.push(<td key="button"><button type="button" name={i} onClick={this.editRow} >Edit</button></td>)
        return data;
    }

    editRow(e) {
        console.log("called editrow");
        this.props.updateForm(this.props.tableData[e.target.name]);
    }

    render() {
        var TableRows = [];

        return this.props.editMode ? <div></div> : <table>
            <thead>
                <tr>
                    {
                        this.props.tableHeaders.map((header) => {
                            return <th key={header}>{header}</th>;
                        })
                    }
                    <th></th>
                </tr>
                </thead>
            <tbody>
                {
                    this.props.tableData.map((data, i) => {
                        return <tr key={i}>
                            {this.getTableRow(data, i)}
                        </tr>;
                    })
                }
            </tbody>
        </table>;
    }
};