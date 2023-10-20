export default function UserProfile({params}: any) {
	return (
		<div>
			<h1>User Profile Page</h1>
 
			<p>Profile Page {params.id}</p>
		</div>
	);
}
