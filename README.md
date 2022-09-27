Q1: Explain what the simple List component does.
Ans: The list component first receives an array of objects called items by destructuring from props. Then there is a useState whose initial value is empty. Next is a UseEffect that has a dependency on Items. In this useEffect the useState value is set to null with setSelectIndex. If there is any change in the items array, then the value of useState will be null through setSelectIndex. Then there is a function that takes index as a parameter and inside the function the value of useState is set index with setSelectIndex. Then inside the component's return body, mapped the items and send the item.text, handleClick function, index, selectIndex to the singleListItem component as props. Then define the type of the items props via proptypes. After that set the default value of the props. If for any reason the value of the props is not available then this default value will be set. Then, rerender is prevented by memorization using React memo. So that was the list component job.

Q2: What problems / warnings are there with code?
Ans: In this code first I found a problem that items received from the List component's props but the items were not being sent from anywhere, so first I created a React app and called the List component from App.js and sent the items via the props. Then there was a problem with the usestate of wrappedListComponent where the setState function was given first and the variable was given after. Then there was another problem where the handleClick function on singleListItem was passed via props but was declared as an array function. The next issue is where the proptypes are declared. Its type and its shape declarations were incorrect. The next problem was in the wrappedSingleListItem component where the props type was declared as boolean where the props value is number.
These are the problems I found and solved