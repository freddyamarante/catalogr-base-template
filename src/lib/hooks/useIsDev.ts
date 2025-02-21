export default function useIsDev () {
  return process.env.NODE_ENV === 'development';
}