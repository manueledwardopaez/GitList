import Heart from "./heart";
import Branch from "./branch";
import Book from "./book";
import ArrowDown from "./arrow-down";
import Cancel from "./cancel";
import Check from "./check";
import Star from "./star";

function Index({ name, ...props }) {
  switch (name) {
    case "heart": {
      return <Heart {...props} />;
    }
    case "branch": {
      return <Branch {...props} />;
    }
    case "book": {
      return <Book {...props} />;
    }
    case "arrowDown": {
      return <ArrowDown {...props} />;
    }
    case "cancel": {
      return <Cancel {...props} />;
    }
    case "check": {
      return <Check {...props} />;
    }
    case "star": {
      return <Star {...props} />;
    }
    default: {
      return null;
    }
  }
}

Index.defaultProps = {
  size: 16,
  color: "white"
}

export default Index;
