package com.conectelas.ConectElas.security;

import com.conectelas.ConectElas.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  private UserDetailsServiceImpl userDetailsService;

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception{
    auth.userDetailsService(userDetailsService);
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .cors().and().csrf().disable()
      .authorizeRequests()
      .antMatchers("/usuarios/**").permitAll()
      .anyRequest().authenticated()
      .and()
      .httpBasic();
  }

  @Bean
  public BCryptPasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
