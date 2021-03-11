import React, { Component } from 'react';
import WidgetItem from './WidgetItem.js';

const languageList = [
    { id: 1, name: "Javascript", count: 0 },
    { id: 2, name: "Python", count: 0 },
    { id: 3, name: "Go", count: 0 },
    { id: 4, name: "Java", count: 0 },
    { id: 5, name: "Typescript", count: 0 },
    { id: 6, name: "Ruby", count: 0 },
    { id: 7, name: "Elixir", count: 0 }
]

class WidgetList extends Component {
    render() {
        return (
            <div>
                <ul className = "languages">
                    {languageList.map((language) => <li><WidgetItem id = {language.id} widgetName={language.name}/></li>)}
                </ul>
            </div>
        )
    }
}

export default WidgetList;