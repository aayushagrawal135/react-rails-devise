FROM ruby:2.5.1

ENV APP_NAME /myapp
ENV BUNDLER_VERSION 2.1.4

RUN mkdir $APP_NAME
WORKDIR $APP_NAME
COPY Gemfile $APP_NAME/Gemfile
COPY Gemfile.lock $APP_NAME/Gemfile.lock

RUN gem update --system && gem install bundler -v $BUNDLER_VERSION
RUN bundle install

COPY . $APP_NAME

EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
