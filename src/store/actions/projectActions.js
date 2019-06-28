export const createProject = project => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore
			.collection('projects')
			.add({
				...project,
				authorFirstName: 'Strah',
                authorLastName: 'Ninja',
                authorId: 1234,
				createdAt: new Date()
			})
			.then(() => {
				dispatch({ type: 'CREATE_PROJECT', project });
			})
			.catch(error => {
				dispatch({ type: 'CREATE_PROJECT-ERROR', error });
			});
	};
};
