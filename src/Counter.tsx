function SampleComponent(
  OtherComponent: React.ReactNode & { onClick: () => void }
) {
  return <OtherComponent />;
}
