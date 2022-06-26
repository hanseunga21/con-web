import { Route, Switch } from 'react-router';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { SignupPage } from './SignupPage';
import { Page1 } from './Page1';
import { Notice } from './Notice';
import { Member } from './Member';
import { Add1 } from './Add1';
import { Todo } from './Todo';
import { AddTodo } from './AddTodo';

export const Router = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} exact />
      <Route path="/page1" component={Page1} />
      <Route path="/notice" component={Notice} />
      <Route path="/member" component={Member} />
      <Route path="/add1" component={Add1} />
      <Route path="/todo" component={Todo} />
      <Route path='/addtodo' component={AddTodo} />
    

    </Switch>
  );
};
