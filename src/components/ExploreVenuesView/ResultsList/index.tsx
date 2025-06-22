import { CircularProgress, Typography } from "@mui/material";
import { useResultsList } from "./useResultsList.ts";
import {
  CardContainer,
  CardsWrapper,
  ListWrapper,
} from "./ResultsList.styled.tsx";
import { VerticalContainer } from "../../../shared/styledComponents/verticalContainer.styled.ts";
import { useError } from "../../../contexts/errorContext.ts";
import type { VenueDto } from "../../../shared/types/venue/venue.dto.ts";
import { VenueCard } from "./VenueCard";

interface ResultsListProps {
  limit: number;
}

export const ResultsList = ({ limit }: ResultsListProps) => {
  const { venuesOnPage, isLoading } = useResultsList(limit);
  const { isError } = useError();

  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  }

  if (isError) {
    return null;
  }

  return (
    <ListWrapper>
      <CardsWrapper>
        {venuesOnPage ? (
          venuesOnPage.map((venue: VenueDto, index: number) => (
            <CardContainer key={index}>
              <VenueCard venue={venue} />
            </CardContainer>
          ))
        ) : (
          <Typography>No venues found</Typography>
        )}
      </CardsWrapper>
    </ListWrapper>
  );
};
