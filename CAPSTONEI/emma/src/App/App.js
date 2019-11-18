import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ItemListNav from '../ItemListNav/ItemListNav';
import ItemPageNav from '../ItemPageNav/ItemPageNav';
import ItemListMain from '../ItemListMain/ItemListMain';
import ItemPageMain from '../ItemPageMain/ItemPageMain';
import dummyStore from '../dummy-store';
import {getItemForCategory, findItem, findCategory} from '../item-helpers';
import './App.css';

class App extends Component {
    state = {
        items: [],
        categories: []
    };

    componentDidMount() {
        // fake date loading from API call
        setTimeout(() => this.setState(dummyStore), 600);
    }

    renderNavRoutes() {
        const {items, categories} = this.state;
        return (
            <>
                {['/', '/category/:categoryId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        render={routeProps => (
                            <ItemListNav
                                categories={categories}
                                items={items}
                                {...routeProps}
                            />
                        )}
                    />
                ))}
                <Route
                    path="/item/:itemId"
                    render={routeProps => {
                        const {itemId} = routeProps.match.params;
                        const item = findItem(items, itemId) || {};
                        const category = findCategory(categories, item.itemId);
                        return <ItemPageNav {...routeProps} category={category} />;
                    }}
                />
                <Route path="/add-category" component={ItemPageNav} />
                <Route path="/add-item" component={ItemPageNav} />
            </>
        );
    }

    renderMainRoutes() {
        const {items, categories} = this.state;
        return (
            <>
                {['/', '/category/:categoryId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        render={routeProps => {
                            const {categoryId} = routeProps.match.params;
                            const itemsForCategory = getItemForCategory(
                                items,
                                categoryId
                            );
                            return (
                                <ItemListMain
                                    {...routeProps}
                                    items={itemsForCategory}
                                />
                            );
                        }}
                    />
                ))}
                <Route
                    path="/item/:itemId"
                    render={routeProps => {
                        const {itemId} = routeProps.match.params;
                        const item = findItem(items, itemId);
                        return <ItemPageMain {...routeProps} item={item} />;
                    }}
                />
            </>
        );
    }

    render() {
        return (
            <div className="App">
                <nav className="App__nav">{this.renderNavRoutes()}</nav>
                <header className="App__header">
                    <h1>
                        <Link to="/">Emma: Your Virtual Grocery Assistant</Link>{' '}
                        {/* <FontAwesomeIcon icon="check-double" /> */}
                    </h1>
                </header>
                <main className="App__main">{this.renderMainRoutes()}</main>
            </div>
        );
    }
}

export default App;