import { useEffect, useRef, useState } from 'react';

export const useOnClickOutside = isInitialState => {
	const [isShow, setIsShow] = useState(isInitialState);
	const ref = useRef(null);

	const handleClickOutside = evt => {
		if (ref.current && !ref.current.contains(evt.target)) {
			setIsShow(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);

		return () =>
			document.removeEventListener('click', handleClickOutside, true);
	});

	return { isShow, ref, setIsShow };
};
