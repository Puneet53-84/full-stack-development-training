import ProfileCard from './ChildComponent'

function ParentComponent() {
    let collageName = "piet";

    let profile = {
        'name': 'dheeraj',
        'age': 26
    }

    return (
        <div>
            <ProfileCard profile={profile} collageName={collageName} />
        </div>
    )
}

export default ParentComponent;