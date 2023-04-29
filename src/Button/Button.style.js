import tw, { styled } from 'twin.macro';

const defaultButtonStyle = tw`
	flex
	justify-center
	items-center

	rounded
	text-sm
	px-5
	py-2
	cursor-pointer
	border-solid
`;

const primaryStyle = tw`
	text-white
	bg-primary
	border-none

	hover:shadow-base
	hover:border-border-base

	active:bg-primary-active
	active:drop-shadow-none

	focus:bg-primary-active
	focus:drop-shadow-none

	disabled:opacity-65
	disabled:cursor-not-allowed
`;

const secondaryStyle = tw`
	bg-white
	border
	border-red-shade
	text-red-shade 

	hover:bg-secondary
	hover:shadow-base

	active:bg-secondary
	active:shadow-base

	focus:bg-secondary
	focus:shadow-base

	disabled:opacity-65
	disabled:drop-shadow-none
	disabled:bg-white
	disabled:cursor-not-allowed
`;

const tertiaryStyle = tw`
	bg-white
	border
	border-tertiary
	text-text-tertiary

	hover:bg-secondary
	hover:shadow-base

	active:bg-secondary
	active:shadow-base

	focus:bg-secondary
	focus:shadow-base

	disabled:opacity-65
	disabled:drop-shadow-none
	disabled:bg-white
	disabled:cursor-not-allowed
`;

const quarternaryStyle = tw`
	bg-white
	border-none
	text-text-tertiary

	hover:bg-quarternary

	active:bg-quarternary

	focus:bg-quarternary

	disabled:bg-quarternary
	disabled:opacity-65
	disabled:cursor-not-allowed
`;

const ButtonType = ({ primary, secondary, tertiary, quarternary }) => [
	defaultButtonStyle,
	primary && primaryStyle,
	secondary && secondaryStyle,
	tertiary && tertiaryStyle,
	quarternary && quarternaryStyle,
	!primary && !secondary && !tertiary && !quarternary && primaryStyle, // default primary
];

const StyledButton = styled.button(() => [ButtonType]);

export default StyledButton;
