import './App.css';
import {getImageUrl} from './utils';

// You can think of a component with a children prop as having a “hole” that can be “filled in” by its parent components with arbitrary JSX.
function Card({children}){
    return (
        <div className='card'>
            {children}
        </div>
    );
}

function Avatar(props) {
    const person = props.person;
    const size = props.size;
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
}

//passing only the required props
export default function Profile({person, size}) {
    return (
        // <>
        // {/* the <Card> below returns nothing accepts nothing so it is just lying there */}
        // <Card/>
        // <Avatar
        //   person={person}
        //   size={size}
        // />
        // </>

        /* the <Card> below returns the child component wrapped in itself which is passed as prop */
        <Card>
            <Avatar
                person={person}
                size={size}
            />
        </Card>
    );
}


//passing all of the components in the children with spread operator
/*
export default function Profile(props) {
    return (
        <Card>
        <Avatar
            {...props}
        />
        </Card>
    );
}
*/